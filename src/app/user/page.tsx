import { Header } from "@/components/Header";

interface IUser {
    name: string;
    rating: number;
    login: string;
    role: number;
}

interface IUserProps {
    IUser: IUser
}

export default function User({ users }: IUserProps) {

    users = [
        {
            name: "Xandin",
            rating: 5,
            login: "xandin",
            role: 0
        },
        {
            name: "Xandin",
            rating: 5,
            login: "xandin",
            role: 1
        },
        {
            name: "Xandin",
            rating: 5,
            login: "xandin",
            role: 0
        },
        {
            name: "Xandin",
            rating: 5,
            login: "xandin",
            role: 1
        },
        {
            name: "Xandin",
            rating: 5,
            login: "xandin",
            role: 1
        },
        {
            name: "Xandin",
            rating: 5,
            login: "xandin",
            role: 1
        },
    ]

    return (
        <div>
            <Header />
            <div className="w-full overflow-x-auto container py-8">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Login
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.rating}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.login}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.role === 1 ? "Cliente" : "Admnistrador"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}