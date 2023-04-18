import { useState, useEffect } from 'react';

const useCookB = () => {
    const [receitas, setReceitas] = useState([]);
    const [selectedReceita, setSelectedReceita] = useState(null);
    
    useEffect(() => {
        const resultado = JSON.parse(localStorage.getItem('cookBookList'))
        if(resultado) {
          setReceitas(resultado)
        }
    }, [])
   
    useEffect(() => {
      localStorage.setItem('cookBookList', JSON.stringify(receitas))
    }, [receitas])

    const addReceita = (receita) => {
      const result = [...receitas, receita]
      setReceitas(result);
    };
  
    const handleReceitaSelect = (receita) => {
      setSelectedReceita(receita);
    };
  
    const deleteReceita = (id) => {
      const result = receitas.filter((receita) => receita.id !== id)
      setReceitas(result);
    };
  
    const updateReceita = (id, updatedReceita) => {
      const result = receitas.map((receita) => (receita.id === id ? updatedReceita : receita))
      setReceitas(result);
    };
    return {
        addReceita,
        selectedReceita,
        updateReceita,
        setSelectedReceita,
        receitas,
        deleteReceita,
        handleReceitaSelect
    }
};

export default useCookB;
