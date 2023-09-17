from email.message import EmailMessage
import smtplib

sender = "brunonoy@hotmail.com"
recipient = "tiagogoy@hotmail.com"
message = "Hello world!"

email = EmailMessage()
email["From"] = sender
email["To"] = recipient
email["Subject"] = "Test Email"
email.set_content(message)

smtp = smtplib.SMTP("smtp-mail.outlook.com", port=587)
smtp.starttls()
smtp.login(sender, "134679Sexo@")
smtp.sendmail(sender, recipient, email.as_string())
smtp.quit()