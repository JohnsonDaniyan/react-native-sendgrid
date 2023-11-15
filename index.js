const CONFIG = {
    SENDGRIDURL: "https://api.sendgrid.com/v3/mail/send"
}

function sendGridEmail(key, to, from, subject, template_id, body, type = "text/plain") {
    const isSuccess = sendEmail(key, to, from, subject, template_id, body, type);
    return isSuccess;
}

function sendEmail(key, to, from, subject, template_id, body, type) {
    return fetch(CONFIG.SENDGRIDURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key
        },
        body: JSON.stringify({
            "personalizations": [
                {
                    "to": [
                        {
                            "email": to
                        }
                    ],
                    "subject": subject, "dynamic_template_data": {},

                }
            ],
            "from": {
                "email": from
            },
            "template_id": template_id
        }),
    }).then((response) => {
        return true;
    }).catch((error) => {
        return false;
    });
}


exports.sendGridEmail = sendGridEmail