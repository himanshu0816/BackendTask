module.exports=(sequelize,Sequlize)=>{
    const Contact_Management=sequelize.define("Contact_detials",{
        _id:{
            type:Sequlize.INTEGER,
            autoincrement:true,
            primarykey:true
        },
        Name:{
            type:Sequlize.STRING,
            allowNull:false
        },
        Email:{
            type:Sequlize.STRING,
            allowNull:false
        },
        phone:{
            type:Sequlize.STRING,
            allowNull:false
        },
        address:{
            type:Sequlize.STRING,
            allowNull:false
        },
        status:{
            type:Sequlize.STRING,
            defaultValue:"ACTIVE"
        }
        
    })
    return Contact_Management;
}