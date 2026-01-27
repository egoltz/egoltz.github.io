# Database Updates using a Stored Procedure
_Built in MySQL_

This stored procedure synchronizes customer churn data between a staging table and a production table, handling additions, updates, and deletions to maintain an accurate dataset.
    - Removes any customers from the production table that no longer exist in the staging data
    - Updates existing customer records if any of their attributes have changed
    - Adds any new customers from the staging table that don't already exist in the production table

## Setup
```sql
CREATE DEFINER=`root`@`localhost` PROCEDURE `PrCustomerChurn`()
BEGIN
    -- Declare variables
    DECLARE VarCurrentTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
    DECLARE VarSourceRowCount, VarTargetRowCount, VarThresholdNbr INT DEFAULT 0;
    DECLARE VarTinyIntVal TINYINT;
    
    -- Disable safe updates
    SET SQL_SAFE_UPDATES = 0;
    
    -- Count rows in the staging table
    SELECT COUNT(*)
    INTO VarSourceRowCount
    FROM Customer.CustomerChurn_Stage;
    
    -- Count rows in the target table
    SELECT COUNT(*)
    INTO VarTargetRowCount
    FROM Customer.CustomerChurn;
    
    -- Calculate threshold of 20% of target row count
    SET VarThresholdNbr = CAST((VarTargetRowCount * 0.2) AS UNSIGNED INTEGER);
    
    -- Check if source row count is below threshold
    IF VarSourceRowCount < VarThresholdNbr THEN
        SET VarTinyIntVal = -129;
    END IF;
```
## Remove Deleted Customer Records
```sql   
    -- Delete records in the target table that are no longer in the staging table
    DELETE TrgtTbl
    FROM Customer.CustomerChurn AS TrgtTbl
    WHERE NOT EXISTS
    (
        SELECT 1
        FROM Customer.CustomerChurn_Stage AS ST
        WHERE ST.CustomerId = TrgtTbl.CustomerId
    );
 ```
 ## Update Existing Customer Information
 ```sql   
    -- Update existing records where any tracked attribute has changed
    -- COALESCE used to safely compare NULL values  
    UPDATE Customer.CustomerChurn AS TrgtTbl
    INNER JOIN Customer.CustomerChurn_Stage AS SrcTbl
        ON TrgtTbl.CustomerId = SrcTbl.CustomerId
    SET 
        TrgtTbl.Surname = SrcTbl.Surname,
        TrgtTbl.CreditScore = SrcTbl.CreditScore,
        TrgtTbl.Geography = SrcTbl.Geography,
        TrgtTbl.Gender = SrcTbl.Gender,
        TrgtTbl.Age = SrcTbl.Age,
        TrgtTbl.Balance = SrcTbl.Balance,
        TrgtTbl.Exited = SrcTbl.Exited,
        TrgtTbl.ChangeAgentId = CURRENT_USER(),
        TrgtTbl.ChangeDtm = VarCurrentTimestamp
    WHERE (
          COALESCE(TrgtTbl.Surname,'*') <> COALESCE(SrcTbl.Surname,'*')
       OR COALESCE(TrgtTbl.CreditScore,'*') <> COALESCE(SrcTbl.CreditScore,'*') 
       OR COALESCE(TrgtTbl.Geography,'*') <> COALESCE(SrcTbl.Geography,'*')
       OR COALESCE(TrgtTbl.Gender,'*') <> COALESCE(SrcTbl.Gender,'*')
       OR COALESCE(TrgtTbl.Age,'*') <> COALESCE(SrcTbl.Age,'*')
       OR COALESCE(TrgtTbl.Balance,'*') <> COALESCE(SrcTbl.Balance,'*')
       OR COALESCE(TrgtTbl.Exited,'*') <> COALESCE(SrcTbl.Exited,'*')
    );
```
## Add New Customers
```sql
    -- Insert new records that exist in staging but not in target
    -- Handles newly added customers
    INSERT INTO Customer.CustomerChurn
    (
        CustomerId,
        Surname,
        CreditScore,
        Geography,
        Gender,
        Age,
        Balance,
        Exited,
        SourceSystemNm,
        CreateAgentId,
        CreateDtm,
        ChangeAgentId,
        ChangeDtm
    )
    SELECT 
        SrcTbl.CustomerId,
        SrcTbl.Surname,
        SrcTbl.CreditScore,
        SrcTbl.Geography,
        SrcTbl.Gender,
        SrcTbl.Age,
        SrcTbl.Balance,
        SrcTbl.Exited,
        'Kaggle-CSV' AS SourceSystemNm,
        CURRENT_USER() AS CreateAgentId,
        VarCurrentTimestamp AS CreateDtm,
        CURRENT_USER() AS ChangeAgentId,
        VarCurrentTimestamp AS ChangeDtm
    FROM Customer.CustomerChurn_Stage AS SrcTbl
    WHERE NOT EXISTS (
        SELECT 1 
        FROM Customer.CustomerChurn AS TT 
        WHERE TT.CustomerId = SrcTbl.CustomerId
    );
    
    -- Re-enable safe updates
    SET SQL_SAFE_UPDATES = 1;
END
```