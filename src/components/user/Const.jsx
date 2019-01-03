
    const headerProps = {
        icon: 'users',
        title: 'Usuarios',
        subtitle: 'Create, Read, Update, Delete (CRUD)'
    }

    
    const baseUrl = 'http://localhost:3001/users'
    
    const initialState = {
        user: { id: '', name: '', email: ''},
        list: []
    }

    export {headerProps, baseUrl, initialState}

