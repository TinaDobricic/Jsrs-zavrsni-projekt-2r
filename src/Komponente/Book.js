import React, { Component } from 'react';
class Book extends Component {
    render() {
        return (
            <div className="Book">
                <div claclassNamess="contact">
                    <h1 className="naslovi">Contact</h1>
                    <p className="contacttext">Mob: 12345678990</p>
                    <p className="contacttext">Adress: Street 4</p>
                    <p className="contacttext">E-mail: scuba@scuba.com</p>
                </div>
                <div className="book" id="book">
                    <h1 id="bknas">Book</h1>
                    <form>
                        <input type="text" placeholder="Name" /> <br />
                        <input type="text" placeholder="Surname" />
                        <br />
                        <input type="email" name="email" id="email" placeholder="email" /><br />
                        <input type="tel" name="tel" id="tel" placeholder="Number" /><br />
                        <input type="date" /><br />
                        <select name="select" id="select" aria-placeholder="Courses">
                            <option value="">Courses</option>
                            <option value="">Intro to Scuba</option>
                            <option value="">Open Water Diver</option>
                            <option value="">Dive Master</option>

                        </select>
                        <br />
                        <input type="reset" value="Reset" />
                        <input type="submit" value="submit" />

                    </form>

                </div>

            </div>
        );
    }
}

export default Book;