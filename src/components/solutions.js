import React from "react"; 



function Solution(props) { 

    if (props.active) { 

        return (
            <div class = "container"> 
                <div class = "row topmargin"> 
                    <div class = "letter solutions"> 
       
                        <h3> Official Police Report: </h3> 
                        
                        <p> <b> The To-Do list: </b>  
                            Using the word 'back' to 'nlmt' we were able to figure out the cipher. n is position 14 in the phrase, and n + 14 = b. 
                            l is position 15 and l + 15 = a. m + 16 = c, t + 17 = k. Thus the transformation is to move
                            over 'x' spaces in the english alphabet where 'x' is the position of the letter in the encryption. 
                            Thus "Kskyc" transformed into Lunch since K + 1 = L, S + 2 = U, K + 3 = N, y+ 4 = c, c + 5 = h. Decrypting 
                            the entire list gave us: Lunch with Jerry, Call Sam & Morgan, Respond to Claire, Pick up Meds. 4 names and 4 
                            slots meant we had our suspects. 
                        </p> 
                        <p> 
                            <b>Suspect Information:</b>  Once we had the suspects the next step was to use the information about their companies 
                            and their work attire to figure out which ones had either dress or sweat pants as part of their attire to align with
                            the note in the starting point. You had to use the information outlined in each profile to eliminate certain 
                            attributes. This is classic logic puzzle and involved eliminating possibilities that led to contradictions. A full youtube 
                            video detailing it will be avaliable later. 
                        </p>
                        <p> 
                            <b> The Emails: </b> Through the emails, two things should have become apparent - that Jerry was profiting off a problem (the virus) 
                            that Andrew was trying to solve and that Karen was cheating on Andrew with Morgan. However, looking at their alibis from earlier 
                            in the Suspect Information we see that Jerry said he was driving up to a beach resort while his email said he was 
                            leaving for a business trip out of country. Morgan's alibi seems to not be under suspect. 
                        </p>
                        <p> 
                            <b>Computer:</b> Black is the first letter of the <b> months </b>. Red is the number of letters in the 
                            instructions (On - 2, your- 4, intuition - 9, we - 2 ....) and the next number in the sequence was 
                            SSH which is length <b> three </b>. Gold is the <b> Princesses </b>, Jas from A (Jasmine from Aladdin), Mul from M
                            (Mulan from Mulan), Ari from LM, (Ariel from Little Mermaid), Els from F (Elsa from Frozen). Green is the 
                            <b> Fibonacci </b> sequence. Purple is See You (CU) since Neptumium (NP) was No Problem. The password is also an 
                            anagram for the motive - money.
                        </p>
                        <p>
                            <b>Pills:</b>  The pills was tricky. We know that the pills that Jerry switched out had to look the same as Andrew. Out of the 25 
                            possible combinations of pills (5  from Andrew, 5 from Jerry) there are only two pairs that "matched". All the others 
                            had at least one dissimilar trait so it was a process of elimination to find the matching pair. The two that could match were: 
                            Andrew's diabetes 2 medicine/Jerry's Nauseau and Andrew's Early Balding/Jerry's Viagra. Jerry's Viagra costs 2.50 which isn't a divisor 
                            of 12, while Jerry's Nauseau costs $3.00 which is a divisor, meaning it has be the Nauseau medication.
                        </p>
                    </div> 
                </div>  
            </div> 
        )

    } else { 
        return ( 
            <div className = "reject"> 
                <h3> Complete the stages! </h3> 
            </div> 
        )
    }
    

}

export default Solution;