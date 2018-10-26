import React from 'react';

const UserForm = (props) => {

    return (
        <form onSubmit={props.getUser}>
            <input style={{margin: '50px', padding: '10px'}}type="text" name="username"></input>
            <button>Submit</button>
        </form>
    );
}

export default UserForm