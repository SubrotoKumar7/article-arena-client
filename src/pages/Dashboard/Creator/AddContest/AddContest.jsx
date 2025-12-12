import React, { useState } from 'react';
import Container from '../../../../components/Shared/Container/Container';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecured from '../../../../hooks/useAxiosSecured';
import uploadImage from '../../../../utils/uploadImage';
import toast from 'react-hot-toast';
import useAuth from '../../../../hooks/useAuth';

const AddContest = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [deadline, setDeadline] = useState(new Date());
    const axiosSecure = useAxiosSecured();
    const {user} = useAuth();
    

    const handleAddContest = async(data) => {

        const {contestName, image, description, price, prizeMoney, taskInstruction, category} = data;
        const imageFile = image[0];
        const imageRes = await uploadImage(imageFile);
        const url = imageRes.data.url;

        const contestInfo = {
            contestName,
            image: url,
            description,
            price: Number(price), 
            prizeMoney: Number(prizeMoney),
            taskInstruction, 
            category,
            deadline,
            participant: 0,
            creatorName: user?.displayName,
            creatorEmail: user?.email,
            creatorPhoto: user?.photoURL
        }

        axiosSecure.post('/contest', contestInfo)
        .then(res=> {
            if(res.data.insertedId){
                reset();
                toast.success("Contest added successful");
            };
        })
        .catch(err=> {
            toast.error(err.message)
        })
    }

    return (
        <div className='py-10'>
            <Container>
                <div className='mb-20'>
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-2xl mt-10">
                        <h2 className="text-2xl text-center font-bold mb-6">Create New Contest</h2>

                        <form onSubmit={handleSubmit(handleAddContest)} className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="font-medium">Contest Name</label>
                                <input
                                    type="text"
                                    {...register("contestName", { required: true })}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded"
                                    placeholder="Enter contest name"
                                />
                                {errors.contestName && <p className="text-red-500 text-sm">Name is required</p>}
                            </div>

                            {/* Image */}
                            <div>
                                <label className="font-medium">Image URL</label>
                                <input type="file" {...register("image", { required: true })} className="file-input w-full mt-2  border border-gray-300 rounded" />
                                {errors.image && <p className="text-red-500 text-sm">Image is required</p>}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="font-medium">Description</label>
                                <textarea
                                    {...register("description", { required: true })}
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
                            className="w-full btn btn-primary">Add Contest</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddContest;


