class Doctor {
    
    constructor(Name,DepartmentId,Designation) {
        this.dep_id=DepartmentId;
        this.doc_name=Name;
        this.doc_desig=Designation;
    }
 
    getAddDoctorSQL() {
        //var query = "INSERT INTO [Doctors] (Name,DepartmentId ,Designation) VALUES ( " + "'" + req.body.Name + "'" + " ," + "'" + req.body.DepartmentId + "'" + "," + "'" + req.body.Designation + "'" + ")";
        let sql = `INSERT INTO Doctors (Name,DepartmentId ,Designation) VALUES('${this.doc_name}',${this.dep_id},'${this.doc_desig}')`;
        return sql;           
    }
 
    static getProductByIdSQL(prd_id) {
        let sql = `SELECT * FROM PRODUCTS WHERE PRD_ID = ${prd_id}`;
        return sql;           
    }
 
    static deleteProductByIdSQL(prd_id) {
        let sql = `DELETE FROM PRODUCTS WHERE PRD_ID = ${prd_id}`;
        return sql;           
    }
 
    static getAllProductSQL() {
        let sql = `SELECT * FROM PRODUCTS`;
        return sql;           
    }    
}
 

module.exports = Doctor;