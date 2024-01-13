import React, { useEffect } from 'react';

const Progressbar = ({ value = 0, showStatus = false }) => {
	return (
		<>
			<div className="progress">
				<span style={{ color: value > 49 ? 'white' : 'black' }}>{value.toFixed()}%</span>
				<div
					role="progressbar"
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={value}
					style={{
						width: `${value}%`
					}}
				/>
			</div>
			{showStatus && <p>{value < 100 ? 'Loading...' : 'Completed'}</p>}
		</>
	);
};

export default Progressbar;
