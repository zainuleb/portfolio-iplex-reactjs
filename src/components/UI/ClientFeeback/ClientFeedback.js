import React, {useState} from 'react'
import styles from './Clientfeedback.module.css'
import saraImage from '../../assets/images/saraImage.png'
import johnImage from '../../assets/images/johnImage.png'
import tinaImage from '../../assets/images/tinaImage.png'

const ClientFeedback = () => {

    let message = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo."
    let clientName = "Sara Smith"
    let clientPosition = "CEO ABC Company"
    const [feedbackMessage, setFeedbackMessage] = useState(message)
    const [feedbackClientName, setfeedbackClientName] = useState(clientName)
    const [feebackClientPosition, setfeedbackPosition] = useState(clientPosition)

    const saraImageClick = () => {
        message = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo."
        clientName = "Sara Smith"
        clientPosition = "CEO ABC Company"
        setFeedbackMessage(message)
        setfeedbackClientName(clientName)
        setfeedbackPosition(clientPosition)
    }
    
    const tinaImageClick = () => {
        message = "sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt is the most explicabo, Sed ut perspiciatis unde omnis iste natus error."
        clientName = "Tina Walliams"
        clientPosition = "React Developer"
        setFeedbackMessage(message)
        setfeedbackClientName(clientName)
        setfeedbackPosition(clientPosition)
    }

    const johnImageClick = () => {
        message = "sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde quasi architecto beatae vitae dicta sunt is the most explicabo omnis iste natus error, eaque ipsa quae ab illo inventore veritatis et."
        clientName = "John Barney"
        clientPosition = "Full Stack Developer"
        setFeedbackMessage(message)
        setfeedbackClientName(clientName)
        setfeedbackPosition(clientPosition)
    }



    return (
        <div className={styles.mainFeedback}>
            <div className={styles.container}>
                <div className={styles.feedbackWrap}>
                    <div className={styles.feedbackHeading}>
                        <h3>What My Client Says</h3>
                        <span className={styles.clientUnderline}></span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                            incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <div className={styles.feedbackContent}>
                        <div className={styles.feedbackImages}>
                            <div className={styles.feedbackImagesWrap}>
                                <img src={saraImage} className={styles.saraImagelarge} 
                                    onClick={() => saraImageClick()}/>
                                <img src={saraImage} className={styles.saraImageSmall}
                                    onClick={() => saraImageClick()}/>
                                <img src={tinaImage} className={styles.tinaImagelarge}
                                    onClick={() => tinaImageClick()}/>
                                <img src={tinaImage} className={styles.tinaImageSmall}
                                    onClick={() => tinaImageClick()}/>
                                <img src={johnImage} className={styles.johnImageleft}
                                    onClick={() => johnImageClick()}/>
                                <img src={johnImage} className={styles.johnImageright}
                                    onClick={() => johnImageClick()}/>
                            </div>
                        </div>
                        <div className={styles.feedbackComment}>
                            <p className={styles.quotesPara}>{feedbackMessage}</p>
                            <p className={styles.clientNamePara}>
                                <span className={styles.clientName}>{feedbackClientName}</span><br/>
                                {feebackClientPosition}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClientFeedback
