const handlerequest = async (url = '', optobj = null, errmsg =null) => {
    try {
        const response = await fetch(url, optobj)
        if (!response.ok) throw Error("Unknow error occured")
    } catch (errmsg) {

    } finally {
        return errmsg
    }
}

export default handlerequest;
