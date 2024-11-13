import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/react'
  import { Fragment, useState } from 'react'
import useAxiosPublic from '../../hook/useAxiosPublic';
const CommentModal = ({closeModal,isOpen,post_Title,_id,user}) => {
  const [comment,setComment]=useState('')
  const axiosPublic=useAxiosPublic()

  

  const handleCommentText=(value)=>{
    setComment(value)
  }


//  --------handle comment button and save comment in commentsCollection in db ----------
  const handleCommentButton=async()=>{
    console.log('comment text : ',comment)
    const commentData={
      comment:comment,
      post_title:post_Title,
      postId:_id,
      upVote:0,
      downVote:0,
      commenter:user.email,
    }
    try{
           const {data}=await axiosPublic.post('/comment',commentData)
           console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }
    return (
        <div>
            {/* show(isOpen) */}
             <Transition appear  show={isOpen}  as={Fragment}>
                {/* onClose = {closeModal} */}
        <Dialog as='div' className='relative z-10' onClose = {closeModal} >
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>
  
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <DialogTitle
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    comment bellow
                  </DialogTitle>
                  <div className='mt-2'>
                  <textarea onChange={(e)=>handleCommentText(e.target.value)}  className="textarea textarea-bordered" name='comment' placeholder="comment here"></textarea>
                  </div>
                  <hr className='mt-8 ' />
                  <div className='flex mt-2 justify-around'>
                    <button
                    onClick={()=>{
                      handleCommentButton(),
                        closeModal()
                    }}
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    >
                      comment now
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                    //   use closeModal function ------
                    //   onClick use
                    onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
        </div>
    );
};

export default CommentModal;