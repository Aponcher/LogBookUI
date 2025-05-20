import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface LogEntryFormProps {
    type?: string
}

const LogEntryForm = ({type}: LogEntryFormProps) => {
    const defaultType = 'default-value';
    const [currentType, setCurrentType] = useState(defaultType);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setCurrentType(type || defaultType);
    }, [type]);

    const unitMap = {
        pushups: 'reps',
        situps: 'reps',
        sleep: 'hours',
        squats: 'reps',
        run: 'km'
    };

    const handleSubmit = async () => {
        const url: string = `http://localhost:8080/log/${currentType}?quantity=${quantity}`;
        // const url: string = `http://logbook-alb-482933692.us-east-2.elb.amazonaws.com/log/${currentType}?quantity=${quantity}`;

        try {
            const response = await axios.post(url);
            console.log('Log entry submitted:', response.data);
            alert('Entry logged successfully!');
        } catch (error) {
            console.error('Error logging entry:', error);
            alert('Failed to log entry.');
        }
    };

    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
            <h3>Log an Activity</h3>

            <label>
                Type:
                <select value={currentType} onChange={(e) => setCurrentType(e.target.value)}>
                    <option value="pushups">Pushups</option>
                    <option value="situps">Situps</option>
                    <option value="sleep">Sleep</option>
                    <option value="squats">Squats</option>
                    <option value="run">Run</option>
                </select>
            </label>

            <br /><br />

            <label>
                Quantity:
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="0"
                    step="any"
                />
            </label>

            <span style={{ marginLeft: '0.5rem' }}>{unitMap[type]}</span>

            <br /><br />

            <button onClick={handleSubmit}>Log</button>
        </div>
    );
};

export default LogEntryForm;
