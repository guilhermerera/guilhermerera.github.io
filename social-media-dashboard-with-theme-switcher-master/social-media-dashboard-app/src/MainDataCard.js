import React from "react";

function MainDataCard(props) {
	const userData = props.mainData.map((data, index) => (
		<article id={index} className={`main-data-card ${data.tag}`}>
			<img src={`./images/icon-${data.tag}.svg`} alt={`${data.tag} icon`}></img>
			<p className='main-data-card-user'>{data.user}</p>
			<p className='main-data-card-number'>{data.number}</p>
			<p className='main-data-card-subtitle'>
				{(() => {
					switch (data.tag) {
						case "youtube":
							return "Subscribers";
						default:
							return "Followers";
					}
				})()}
			</p>
			<p className='main-data-card-var'>{data.var} Today</p>
		</article>
	));

	return <section className='main-data'>{userData}</section>;
}

export default MainDataCard;
