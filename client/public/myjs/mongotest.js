var mongoose = require('mongoose');

var mySchema = new mongoose.Schema({
    doctor: String,
    title: String,
    count: Number
},{
  versionKey: false
});

mySchema.pre('save', function(next){
    if(false){
        this.doctor = "1111111";
    }
    next();
});
mySchema.statics = {
    fetch: function(){
        return this.find({doctor: 'dr'})
        		
    },
    findById: function(cb){
        return this
            .find({})
    }
}

module.exports = mySchema;
