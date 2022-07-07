export function SignIn(){
    return(
        <div class="signin">
            <form>
                <div>
                    <h2>SIGN UP</h2>
                    <label>Email</label><br/>
                    <input type="email" class="inputboxes" required/><br/>
                    <label>Password</label><br/>
                    <input type="text" id="password" class="inputboxes" required/><br/>
                    <label>Password Confirmation</label><br/>
                    <input type="text" id="passwordConfirmation" class="inputboxes" required/><br/>
                    <input type="submit" class="submit"/>
                </div>
            </form>
        </div>
    )
}