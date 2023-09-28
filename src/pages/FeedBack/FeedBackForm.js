import React, { useState } from 'react'
import { db } from "../../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";



export default function FeedBackForm() {

    const [name, setName] = useState('');
    const [specialTopics, setSpecialTopics] = useState('');
    const [coverBetter, setCoverBetter] = useState('');
    const [futureTopics, seFutureTopics] = useState('');
    const [experience, setExperience] = useState('');
    const [feedbacks, setFeedback] = useState([]);

    
    {/*Add feedback to the database*/}
    const addFeedback = async () => {
        const docRef = await addDoc(collection(db, "feedbacks"), {
            name: name,
            specialTopics: specialTopics,
            coverBetter: coverBetter,
            futureTopics: futureTopics,
            experience: experience
        }).then(() => { //if adding is success
            alert("Feedback Store Successfully!");
            clearText();
        }).catch(() => { //if any error occured
            alert("Sorry! Feedback Not Added.");
        });
    }

   
   
   
   
   
   
   
   
   
    return (
        <div className='container'>

            {/* Create form */}
                <div className="row">
                    <div>
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="email" value={name} onChange={(e) => { setName(e.target.value) }} class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div>
                        <label for="exampleFormControlTextarea1">Specific topics or areas you found most valuable</label>
                        <textarea value={specialTopics} onChange={(e) => { setSpecialTopics(e.target.value) }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div>
                        <label for="exampleFormControlTextarea1">Topics or areas that could have been covered better</label>
                        <textarea value={coverBetter} onChange={(e) => { setCoverBetter(e.target.value) }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div>
                        <label for="exampleFormControlTextarea1">Suggestions for future session topics</label>
                        <textarea value={futureTopics} onChange={(e) => { seFutureTopics(e.target.value) }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div>
                        <label for="exampleFormControlTextarea1">Overall Experience</label>
                        <textarea value={experience} onChange={(e) => { setExperience(e.target.value) }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <input class="btn btn-primary" type="submit" value="Submit" onClick={addFeedback}></input>
                </div>
            

            {/*Create Table*/}
            <div className="row">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Specific topics or areas you found most valuable</th>
                            <th scope="col">Suggestions for future session topics</th>
                            <th scope="col">Overall Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                                {
                                    feedbacks.map(feedback => {
                                        return (
                                            <tr>
                                                <td>{feedback.name}</td>
                                                <td>{feedback.specialTopics}</td>
                                                <td>{feedback.coverBetter}</td>
                                                <td>{feedback.futureTopics}</td>
                                                <td>{feedback.experience}</td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                </table>
            </div>
        </div>
    )
}
