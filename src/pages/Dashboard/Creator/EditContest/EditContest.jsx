import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import Loader from '../../../../components/Loader/Loader';

const EditContest = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [deadline, setDeadline] = useState(new Date());
    const {id} = useParams();
    const axiosSecure = useAxiosSecured();
    const {user} = useAuth();

    const {data: contest = [], isLoading, refetch} = useQuery({
        queryKey: ['contest', id],
        queryFn: async() => {
            const res = await axiosSecure.get(`/contest/${id}`);
            return res.data;
        }
    });

    

    const handleEditContest = async(data) => {

        const {contestName, description, price, prizeMoney, taskInstruction, category} = data;

        const contestInfo = {
            contestName,
            description,
            price: Number(price), 
            prizeMoney: Number(prizeMoney),
            taskInstruction, 
            category,
            deadline,
        }

        axiosSecure.patch(`/contest/${id}`, contestInfo)
        .then(res=> {
            if(res.data.modifiedCount){
                toast.success("Contest update successful");
                refetch();
            };
        })
        .catch(err=> {
            toast.error(err.message)
        })
    }

    useEffect(() => {
    if (contest) {
        reset({
            contestName: contest.contestName,
            description: contest.description,
            price: contest.price,
            prizeMoney: contest.prizeMoney,
            taskInstruction: contest.taskInstruction,
            category: contest.category,
            });
        }
    }, [contest, reset]);


    if(isLoading){
        return <Loader></Loader>
    }

    return (
        <div>
            <div className='mb-20'>
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-2xl mt-10">
                    <h2 className="text-2xl text-center font-bold mb-6">Edit Contest</h2>

                    <form onSubmit={handleSubmit(handleEditContest)} className="space-y-5">

                        {/* Name */}
                        <div>
                            <label className="font-medium">Contest Name</label>
                            <input
                                type="text"
                                defaultValue={contest?.contestName}
                                {...register("contestName", { required: true })}
                                className="w-full mt-2 p-3 border border-gray-300 rounded"
                                placeholder="Enter contest name"
                            />
                            {errors.contestName && <p className="text-red-500 text-sm">Name is required</p>}
                        </div>


                        {/* Description */}
                        <div>
                            <label className="font-medium">Description</label>
                            <textarea
                                {...register("description", { required: true })}
                                defaultValue={contest?.description}
                                className="w-full mt-2 p-3 border border-gray-300 rounded"
                                rows="4"
                                placeholder="Write contest description"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
                        </div>

                        {/* Price */}
                        <div>
                            <label className="font-medium">Price</label>
                            <input
                                type="number"
                                {...register("price", { required: true })}
                                defaultValue={contest?.price}
                                className="w-full mt-2 p-3 border border-gray-300 rounded"
                                placeholder="Entry price"
                            />
                            {errors.price && <p className="text-red-500 text-sm">Price is required</p>}
                        </div>

                        {/* Prize Money */}
                        <div>
                            <label className="font-medium">Prize Money</label>
                            <input
                                type="number"
                                {...register("prizeMoney", { required: true })}
                                defaultValue={contest?.prizeMoney}
                                className="w-full mt-2 p-3 border border-gray-300 rounded"
                                placeholder="Prize amount"
                            />
                            {errors.prizeMoney && <p className="text-red-500 text-sm">Prize money is required</p>}
                        </div>

                        {/* Task Instruction */}
                        <div>
                            <label className="font-medium">Task Instruction</label>
                            <textarea
                                {...register("taskInstruction", { required: true })}
                                defaultValue={contest?.taskInstruction}
                                className="w-full mt-2 p-3 border border-gray-300 rounded"
                                rows="3"
                                placeholder="Describe the task"
                            ></textarea>
                            {errors.taskInstruction && <p className="text-red-500 text-sm">Task Instruction is required</p>}
                        </div>

                        {/* Contest Type */}
                        <div>
                            <div>
                                <label className="font-medium">Article Category</label>
                                <select
                                    {...register("category", { required: true })}                                    
                                    className="w-full mt-2 p-3 border border-gray-300 rounded bg-white focus:ring focus:ring-blue-300"
                                >
                                    <option value="">Select Category</option>

                                    <optgroup label="Technology & Innovation">
                                    <option value="ai">Artificial Intelligence</option>
                                    <option value="software">Software & Programming</option>
                                    <option value="cybersecurity">Cybersecurity</option>
                                    <option value="gadgets">Gadgets Review</option>
                                    <option value="future-tech">Future Technology</option>
                                    </optgroup>

                                    <optgroup label="Science & Environment">
                                    <option value="space">Space & Astronomy</option>
                                    <option value="climate">Climate Change</option>
                                    <option value="environment">Environmental Awareness</option>
                                    <option value="biology">Biology / Research</option>
                                    <option value="sustainable">Sustainable Living</option>
                                    </optgroup>

                                    <optgroup label="Lifestyle & Personal Development">
                                    <option value="productivity">Productivity</option>
                                    <option value="health">Health & Wellness</option>
                                    <option value="finance">Personal Finance</option>
                                    <option value="travel-story">Travel Stories</option>
                                    </optgroup>

                                    <optgroup label="Literature & Creative Writing">
                                    <option value="story">Short Story</option>
                                    <option value="poetry">Poetry</option>
                                    <option value="review">Book Review</option>
                                    <option value="fiction">Fiction / Non-fiction</option>
                                    <option value="essay">Creative Essay</option>
                                    </optgroup>
                                </select>
                            </div>
                            {errors.category && <p className="text-red-500 text-sm">Contest type is required</p>}
                        </div>

                        {/* Deadline */}
                        <div>
                            <label className="font-medium">Deadline</label>
                            <div className="mt-2">
                                <DatePicker
                                selected={deadline}
                                onChange={(date) => setDeadline(date)}
                                className="w-full p-3 border border-gray-300 rounded"
                                placeholderText="Select deadline"
                                />
                            </div>
                            {!deadline && <p className="text-red-500 text-sm">Deadline is required</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                        type="submit"
                        className="w-full btn btn-primary">Save Contest</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditContest;