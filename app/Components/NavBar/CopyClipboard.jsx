'use client'

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { fireAlert } from '@/app/helper/functions';

export default function CopyClipboard({ content, copy, popUpInfo }) {
    return (
        <CopyToClipboard text={copy} onCopy={()=>fireAlert(popUpInfo)} style={{cursor: 'pointer'}}>
            <a>{content}</a>
        </CopyToClipboard>
    )
}
