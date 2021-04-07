import Card from './Card';
const Cardlist = ({People})=>{
const CardArray=People.map((person,i)=>{
	console.log(person.profile)
	return (
	<Card
	 key={person.id}
	 id={person.id}
	 profile={require(`${person.profile}`).default}
	 name={person.name}
	 nickName={person.nickName} 
	/>
	)
})

return CardArray;
}
export default Cardlist;