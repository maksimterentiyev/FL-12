let email = prompt('Enter your email:');
const minEmailLength = 5;
const minPasswordLength = 6;
if (email === '' || typeof email === 'object') {
    alert('Canceled');
} else if (email.length < minEmailLength) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com') {
    let correctPassword = 'UserPass';
    let password = prompt('Enter your password:');
    if (password === '' || typeof password === 'object') {
        alert('Canceled');
    } else if (password === correctPassword) {
        if (confirm('Do you want to change your password?')) {
            let correctPasswordRepeat = prompt('Enter your old password');
            if (correctPasswordRepeat === correctPassword) {
                let newPassword = prompt('Enter new password:');
                if (newPassword === '' || typeof newPassword === 'object') {
                    alert('Canceled');
                } else if (newPassword.length < minPasswordLength) {
                    alert('It’s too short password. Sorry.');
                }
                let newPasswordRepeat = prompt('Enter the new password again');
                if (newPasswordRepeat === newPassword) {
                    alert('You have succesfully changed your password.');
                } else {
                    alert('You wrote the wrong password');
                }
            } else if (correctPasswordRepeat === '' || typeof correctPasswordRepeat === 'object') {
                alert('Canceled');
            } else {
                alert('Wrong Password');
            }
        } else {
            alert('You have failed the change.')
        }
    } else {
        alert('Wrong Password');
    }
} else if (email === 'admin@gmail.com') {
    let correctPassword = 'AdminPass';
    let password = prompt('Enter your password:');
    if (password === '' || typeof password === 'object') {
        alert('Canceled');
    } else if (password === correctPassword) {
        if (confirm('Do you want to change your password?')) {
            let correctPasswordRepeat = prompt('Enter your old password');
            if (correctPasswordRepeat === correctPassword) {
                let newPassword = prompt('Enter new password:');
                if (newPassword === '' || typeof newPassword === 'object') {
                    alert('Canceled');
                } else if (newPassword.length < minPasswordLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let newPasswordRepeat = prompt('Enter the new password again');
                    if (newPasswordRepeat === newPassword) {
                        alert('You have succesfully changed your password.');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            } else if (correctPasswordRepeat === '' || typeof correctPasswordRepeat === 'object') {
                alert('Canceled');
            } else {
                alert('Wrong Password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong Password');
    }
} else {
    alert("I don't know you");
}