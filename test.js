const companies = [
	{id : 0, name : 'IBM', slogan : 'Count to End'},
	{id : 1, name : 'Oracle', slogan : 'Find unfoundable'},
	{id : 2, name : 'SUN Microsystems', slogan : 'Big computers'},
	{id : 3, name : 'Dell', slogan : 'Quick sales'}
];

const users = [
	{id : 0, name : 'Bill Gates', companyId : 0, active : true, pwd : 'where I am'},
	{id : 1, name : 'John Archibald', companyId : 1, active : true, pwd : 'SelectSQL'},
	{id : 2, name : 'John Cussack', companyId : 0, active : true, pwd : 'solarSystem'},
	{id : 3, name : 'Bon Jovie', companyId : 2, active : false, pwd : 'DeleteallDells'},
	{id : 4, name : 'Phill Esposito', companyId : 3, active : false, pwd : 'diamondsEsmeralda'},
	{id : 5, name : 'Bruce Willis', companyId : 4, active : true, pwd : 'DenniesPennies'},
	{id : 6, name : 'Amma Stoune', companyId : 0, active : true, pwd : 'Flockthemock'},
];
(()=>{
const user_comp = users.map((user) => {
		console.log('user:',user);
		const ucomp = companies.find((company) => company.id === user.companyId);
		console.log('ucomp:',ucomp);
		let cname ='';
		if (ucomp !== undefined) cname = ucomp.name;
		console.log('cname:',cname);
		const pic = (({id, name, companyId, active}) =>({id, name, companyId}))(user);
		const full_user = pic;
		full_user.active = user.active ? 'Active':'Deleted';
		full_user.company = cname;
		console.log('full_user:',full_user);
		return full_user;
	});
	console.log('user_comp:',user_comp);	
})();	

