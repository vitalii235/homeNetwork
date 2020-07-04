import React, { useEffect } from 'react'
import { DropzoneDialog } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { uploadModalIsOpen, uploadModalIsClosed, uploadFiles, getLinkToAvatar, imageIsUploading, imageHasBeenUploaded } from '../store/actions/AuthActions';
import { storage } from './firebaseUpload'

export const ChooseFile = () => {
    const { auth: { uploadModalStatus, image, linkToAvatar } } = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    const modalIsOpen = () => {
        dispatch(uploadModalIsOpen())
    }
    const modalIsClosed = () => {
        dispatch(uploadModalIsClosed())
    }
    const addFiles = files => {
        dispatch(uploadFiles(files))
        dispatch(uploadModalIsClosed())
        dispatch(imageIsUploading())
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image[0].name}`).put(image[0])
        uploadTask.on(
            "state_changed",
            snapshot => {

            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image[0].name)
                    .getDownloadURL()
                    .then(url => {
                        dispatch(getLinkToAvatar(url))
                       
                    });
            }
        );
    };

    useEffect(() => {
        if (image) {
            handleUpload()
        }
    }, [image])

    useEffect(()=> {
        dispatch(imageHasBeenUploaded())
    }, [linkToAvatar])
    return (
        <div>
            <Button onClick={modalIsOpen}>
                Add Image
                            </Button>
            <DropzoneDialog
                open={uploadModalStatus}
                onSave={addFiles}
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={modalIsClosed}
            />
        </div>
    )
}