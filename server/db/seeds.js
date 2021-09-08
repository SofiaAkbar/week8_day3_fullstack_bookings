use bookings;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "Ron Perlman",
        email: "ron.perlman@gmail.com",
        status: "Yes"
    },
    {
        name: "Angelina Jolie",
        email: "angjolie@hotmail.co.uk",
        status: "No"
    },
    {
        name: "Elton John",
        email: "ejohn@yahoo.com",
        status: "Yes"
    }
]);