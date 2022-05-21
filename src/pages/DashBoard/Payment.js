import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
} from '@stripe/react-stripe-js';
import CheckoutFrom from '../DashBoard/CheckoutFrom';


const stripePromise = loadStripe('pk_test_51L1q3WE0xC6pJnzNqbL58cmnStdQ96dmd83YSSgTup8CKLwHeXhqc95XV4dhQMCSLigvSyb47o79xK5CdAnNTWXO00vyRfL5ey');

const Payment = () => {
    const { id } = useParams()

    const url = `https://doctors-portal-heroo.herokuapp.com/booking/${id}`


    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <div class="card w-50 max-w-sm bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                        <CheckoutFrom appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;