export const API_NOTIFICATION_MESSAGES={
    loading:
    {
        title:'loading...',
        message:'Data is being loaded,Pls wait'
    },
    success:
    {
title:'success',
message:'Data successfully loaded'
    },
    responseFailure:
    {
        title:'Error',
        message:'An error occured while fetching'
    },
    requestFailure:
    {
        title:'Error',
        message:'An error occured while parsing'
    },
    networkError:
    {
        title:'Error',
        message:'Unable to connect'
    }
    
}
export const SERVICE_URLS={
    userSignup:{url:'/signup',method:'POST'},
    userLogin:{url:'/login',method:'POST'},
   // usersearc:{url:'/searc',method:'GET',query:true},
    uploadFile:{url:'/file/upload',method:'POST'},
    createPost:{url:'/create',method:'POST'},
    allpost:{url:'/post',method:'GET',params:true},
    postId:{url:'/postid',method:'GET',query:true},
    updatePost:{url:'updatepost',method:'PUT',query:true},
    deletePost:{url:'/delete',method:'DELETE',query:true},
    commentPost:{url:'/comment',method:'POST'},
    getAllComments:{url:'/comments',method:'GET',query:true},
    deleteComment:{url:'/comment/delete',method:'DELETE',query:true}
}