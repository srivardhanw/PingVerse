import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

const Auth = () => {
    return (

        <div>
            <SignedOut>
                <div className='flex gap-5'>
                    <SignInButton mode='modal'>
                        <button className='bg-purple-600 px-5.5 py-3 text-white rounded-3xl hover:opacity-75 transition-opacity duration-100 ease-in-out'>Login</button>
                    </SignInButton>
                    <SignUpButton mode='modal'>
                        <button className='border-1  px-4 py-3 rounded-3xl hover:opacity-75 transition-opacity duration-100 ease-in-out'>Sign up</button>
                    </SignUpButton>
                </div>
            </SignedOut>
            <SignedIn>
                <div className='flex justify-center'>
                    <UserButton />
                </div>
            </SignedIn>
        </div>
    )
}

export default Auth