import React, { useEffect, useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import db from '../../firebae';

const TinderCards = () => {
    const [peaple, setPeaple] = useState([]);

    useEffect(() => {
       const unsubscribe = db.collection("peaple").onSnapshot(snapshot => {
            setPeaple(snapshot.docs.map(doc => doc.data() ))
        })

        return () => unsubscribe();
    }, [])
    return (
        <div>

            <div className="tinderCards__cardContainer">
            {
                peaple.map(person => (
                    <TinderCard
                     className="swipe"
                     key={person.name}
                     preventSwipe={['top', 'down']}
                    >
                        <div
                         style={{ backgroundImage: `url(${person.url})` }}
                         className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
            </div>
           
        </div>
    )
}

export default TinderCards
