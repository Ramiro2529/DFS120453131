db.products.aggregate([{$out:'Articulos'}])

db.products.find({ProductID:'7'})

db.products.updateOne({ProductID:'7'}, {$set:{ProductName:'modificado'}})

db.alumnos2.insert({_id:1, nombre:'Rebeca', materia:'Pruebas', Calificacion:8})
db.alumnos2.insert({_id:2, nombre:'Fabian', materia:'Virologia', Calificacion:5})
db.alumnos2.insert({_id:3, nombre:'Agustin', materia:'Ingenieria del conocimiento', Calificacion:10})
db.alumnos2.insert({_id:4, nombre:'Ray', materia:'Pruebas', Calificacion:5})

db.alumnos2.updateMany({Calificacion:{$lt:6}}, {$set:{extraordinario:true}})

db.alumnos2.updateMany({_id:{$in:[1,2]}}, {$unset:{extraordinario:true}, $set:{Calificacion:7}}) //modificar y borrar una tupla(columna) al mismo tiempo 

db.products.updateMany({UnitsOnOrder:{$lt:15}}, {Discontinued:{$eq:0}}, {$set:{SolicitudProveedor: 20}}) // le faltó un and

db.products.updateMany({UnitsOnOrder:{$lt:15}}, {$set:{SolicitudProveedor: 20}})

db.products.updateMany({SolicitudProveedor:{$eq:20}}, {$unset:{SolicitudProveedor:20}, $set:{UnitsOnOrder:20}})


db.Articulos.updateMany({CategoryID:3}, {$mul:{UnitPrice:0.5}} )	

db.Articulos.updateMany({CategoryID:3}, {$mul:{UnitPrice:0.5}} )

db.Articulos.find({$and:[{CategoryID:2}, {UnitPrice:{$gt:20}}]}).pretty()

db.Articulos.updateOne({ProductName:"Queso Manchego La Pastora"}, {$set:{UnitPrice:40}})

db.empleados2.updateOne({EmployeeID:1},{$set: {Title:"Sales Manager"}})

db.employees.aggregate({$out: "empleados2"})

db.ordenes.deleteOne({OrderID:10248})

db.empleados2.deleteOne({EmployeeID:4})

 db.ordenes.deleteMany({Freight: {$gte:55}})

 db.ordenes.deleteMany({$and:[{EmployeeID:4}, {Freight: {$gte:55}}]})