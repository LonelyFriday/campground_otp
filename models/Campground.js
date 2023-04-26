const mongoose = require('mongoose');

const CampgroundSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    address: {
        type: String,
        require: [true, 'Please add an address']
    },
    phonenumber: {
        type: String,
        required: [true, 'Please add a phone number']
    },
    createAt:{
        type: Date,
        default: Date.now
    },   
},
    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
});

// Cascade delete bookings when a campground is deleted
CampgroundSchema.pre('remove', async function(next){
    console.log(`Bookings being removed from hospital ${this._id}`);
    await this.model('Booking').deleteMany({campground: this._id});
    next();
});

// Reverse populate with virtual
CampgroundSchema.virtual('bookings', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'campground',
    justOne: false
});

module.exports = mongoose.model('Campground', CampgroundSchema);