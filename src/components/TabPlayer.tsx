import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { parseTab } from '../lib/tabparser'

interface TabPlayerProps {
    // inject controller
}

const TabPlayer: React.FC<TabPlayerProps & { className?: string }> = ({ }) => {
    const [isTabValid, setIsTabValid] = useState<boolean>(false);
    const [hasTab, setHasTab] = useState<boolean>(false);
    const [tabResult, setTabResult] = useState<string>('');

    function handleTabChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        let text : string = event.target.value; // target is textarea
        setHasTab (text.length > 0);
        if (!hasTab) {
            setIsTabValid(false);
            return;
        }
        const result = parseTab(text);
        setIsTabValid(result.isValid);
        setTabResult(result.reason);
    }

    return (
        <div>
            <h5>Tab player</h5>
            <Form>
                <Form.Group className="mb-3" controlId="tabInputArea">
                    <div style={{fontSize: '8px'}}>Paste tab here (1-4 bars with up to 32 notes each, pulloff and hammer-on allowed, no annotations such as slide or tremolo)</div>
                    <Form.Control style={{fontSize:'8px', fontFamily: "monospace", overflow: 'auto', height: '100px'}} as="textarea" rows={3} onChange={handleTabChange}/>
                </Form.Group>
            </Form>
            { hasTab &&  !isTabValid && (
                <div className="text-bg-danger">invalid tablature: {tabResult}</div>
            ) }
            { hasTab && isTabValid && (
            <Button variant="info"  >Play Tab</Button>
            )}
        </div>
    )
};

export default TabPlayer;