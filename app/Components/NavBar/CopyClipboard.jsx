'use client'

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

export default function CopyClipboard({ content, copy, popUpInfo }) {
    function fire(){
        Swal.fire({
            position: 'bottom-end',
            title: '',
            showConfirmButton: false,
            timer: 800,
            html: `<p>${popUpInfo}</p>`
        })
    }

    return (
        <CopyToClipboard text={copy} onCopy={fire} style={{cursor: 'pointers'}}>
            <a>{content}</a>
        </CopyToClipboard>
    )
}
