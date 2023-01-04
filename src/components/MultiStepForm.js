import React, { useState, useEffect } from 'react';
import 'animate.css';

const MultiStepForm = () => {
	const [step, setStep] = useState(1);
	const [animation, setAnimation] = useState('');

	useEffect(() => {
		setAnimation('animate__animated animate__bounceIn');
	}, [step]);

	const handleNext = () => {
		setAnimation('animate__animated animate__backInRight');
		setTimeout(() => setStep(step + 1), 500);
	};

	const handleBack = () => {
		setAnimation('animate__animated animate__backInLeft');
		setTimeout(() => setStep(step - 1), 500);
	};

	return (
		<div className={`step step-${step} ${animation}`}>
			{step === 1 && (
				<div style={{ background: 'red' }}>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" />
					<button onClick={handleNext}>Next</button>
					<button style={{ marginLeft: '18px' }} onClick={handleBack}>
						Back
					</button>
				</div>
			)}
			{step === 2 && (
				<div style={{ background: 'blue' }}>
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" />
					<button onClick={handleNext}>Next</button>
					<button style={{ marginLeft: '18px' }} onClick={handleBack}>
						Back
					</button>
				</div>
			)}
		</div>
	);
};

export default MultiStepForm;
