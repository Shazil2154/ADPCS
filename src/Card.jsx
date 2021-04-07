const Card = ({profile,name,nickName})=>{
	return (
		<div className='bg-silver dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={profile}
			 alt="profile-pic"
			 width="200px"
			 height="200px"
			/>
			<h4>{name}</h4>
			<h4>{nickName}</h4>
		</div>
		)
}
export default Card;