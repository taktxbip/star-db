const compose = (...funcs) => (comp) => {
	return funcs.reduceRight((preResult, f) => f(preResult), comp);
}

export default compose;