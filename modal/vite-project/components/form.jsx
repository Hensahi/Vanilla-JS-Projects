import React from "react";

function TestForm() {


    return (
        <>
            <form>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="Insert your name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Insert your email" />
                </div>
            </form>
        </>
    )
}

export default TestForm;