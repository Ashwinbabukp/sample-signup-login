class Landing {
    database = {
        Goks: { username: "Goks", password: "123" },
        Nandhu: { username: "Nandhu", password: "1234" },
        Anold: { username: "Anold", password: "12345" },
        Hari: { username: "Hari", password: "123456" },
    }

    // store data
    saveData() {
        // store db
        if (this.database) {
            localStorage.setItem("database", JSON.stringify(this.database));
        }
    }

    // getData
    getData() {
        this.database = JSON.parse(localStorage.getItem("database"))
    }


    //  register 
    register() {
        // get data from local storage 
        this.getData();
        let user = regUser.value
        let pswd = regPswd.value
        console.log(pswd);
        if (user == "" || pswd == "") {
            alert("please enter valid inputs...!!")
        }
        else {
            if (user in this.database) {
                alert("user Already exists..!!")
            }
            else {
                // register
                this.database[user] = { username: user, password: pswd }
                console.log(this.database);
                this.saveData();
                alert("signup succesfully...!")
            }
        }

    }

    // login
    login() {
        this.getData();
        let user = lUser.value;
        let pswd = lPswd.value;

        this.getData()

        if (user in this.database) {
            if (this.database[user].password == pswd) {
                // save username 
                localStorage.setItem("user", user)
                alert('Login succesfull')
                // naviagte to home
                window.location = "home.html"
            }
            else {
                alert('Invalid password')
            }
        }
        else {
            alert('User doesnot exist..!!')
        }


    }


}

const obj = new Landing();
obj.getData();

