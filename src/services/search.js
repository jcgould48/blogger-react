
export let searchIt = (term) => (item) => 
item.subject.toLowerCase().includes(term.toLowerCase());  //Alternative way to write
