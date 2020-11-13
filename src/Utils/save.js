/*
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = () => {
      api.get('/categories', {
        headers: {
          'Authorization': 'Qualquer Coisa'
        }
      })
      .then((res) => {
        setCategories(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
    }
    fetchCategories()
  },[]);
  console.log(categories)
  */