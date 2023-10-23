function qsDeep(params, formData = null) {
  let queryParams = []
  for(let key in params) {
    if(typeof params[key] === 'function') continue;
    if(typeof params[key] === 'object') { // Apply for literal object or arrays
      const p = Object.fromEntries(Object.entries(params[key]).map(([k, v]) => [`${key}[${k}]`,v]))
      queryParams.push(qsDeep(p, formData))
      continue;
    }
    if(formData) formData.append(key, param[key])
    queryParams.push(`${key}=${params[key]}`)
  }
  return queryParams.length ? queryParams.join('&') : ''
}
