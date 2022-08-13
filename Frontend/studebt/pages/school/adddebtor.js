import React from 'react'

const adddebtor = () => {
    return (
        <div id="entire-form">
            <h5>Student's Information</h5>
            <form id="input-section">
                <div id="text">
                    <div>
                        <label for="first name">First Name</label><br />
                        <input type="text" required /><br />
            
                        <label for="last name">Last Name</label><br />
                        <input type="text" required /><br />
            
                        <label for="Email">Email</label><br />
                        <input type="email" required /><br />
            
                        <label for="Address">Address</label><br />
                        <input type="text" required />
                    </div>
                    <div className="shift">
                        <label for="first name">Enter BCN Number</label><br />
                        <input type="text" required /><br />
            
                        <label for="last name">Enter NIN Number</label><br />
                        <input type="text" required /><br />
            
                        <label for="Email">Class</label><br />
                        <input type="text" required /><br />
                        <label for="Address">State</label><br />
                        <select name="states" id="states" required>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa-Ibom">Akwa-Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="FCT">Federal Capital Territory</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                        </select>
                    </div>
                </div>
        
                <div id="image-section">
                    <div className="content3">
                    <input type="file" id="file" style="display: none" /><br />
                    <label for="file" id="upload">
                        <img src="profile.jpg" id="photo" alt="profile" /><br />
                        Upload Debtors Passport</label
                    >
                    </div>
                    <div className="content4">
                    <a href="debtdetails.html"><img src="" alt="next page" /></a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default adddebtor