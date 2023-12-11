import { SortBy, type User } from '../types.d'

interface Props {
    changeSorting: (sortBy: SortBy) => void
    deleteUser: (email: string) => void
    showColors: boolean,
    users: User[]
}
export function UsersList({ changeSorting, deleteUser, showColors, users }: Props) {
    return (
        <table width='100%'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th className='pointer' onClick={() => changeSorting(SortBy.NAME)}>Nombre</th>
                    <th className='pointer' onClick={() => changeSorting(SortBy.LAST)}>Apellido</th>
                    <th className='pointer' onClick={() => changeSorting(SortBy.COUNTRY)}>País</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody className={showColors ? 'tableshowColors' : 'table'}>
                {
                    users.map((user) => {

                        // const backgroundColor = index % 2 == 0 ? '#333' : '#555'
                        // const color = showColors ? backgroundColor : 'transparent'

                        return (
                            <tr key={user.email} >
                                <td>
                                    <img src={user.picture.thumbnail} />
                                </td>
                                <td>
                                    {user.name.first}
                                </td>
                                <td>
                                    {user.name.last}
                                </td>
                                <td>
                                    {user.location.country}
                                </td>
                                <td>
                                    <button onClick={() => {
                                        deleteUser(user.email)
                                    }}>Borrar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table >
    )
}

//table completa, thead parte acebeza, tbody parte de cuerpo<- son clave
// tr la fila q queremos hacer-> row
// th -> celdas del header
// td la celda -> cell