const Search = ({onChange})=>{
	return(
	<div  className='pa2'> 
		<input
		 className="pa3 ba b--green bg-lightest-blue"
		 type="input" 
		 placeholder="Search Anyone"
		 onChange={onChange}
		/>
	</div>
	);
}
export default Search;