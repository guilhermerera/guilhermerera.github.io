import React from "react";

function OverviewItems(props) {
	const OverViewData = props.overviewData.map((data, index) => (
		<articles id={index} className='overview-card-items'>
			<h3 className='overview-metrics'>{data.metrics}</h3>
			<img src={`./images/icon-${data.tag}.svg`} alt={`${data.tag} icon`}></img>
			<p className='overview-number'>{data.number}</p>
			<p className='overview-variation'>{data.var}%</p>
		</articles>
	));

	return <div className='overview-card-group'>{OverViewData}</div>;
}

export default OverviewItems;
