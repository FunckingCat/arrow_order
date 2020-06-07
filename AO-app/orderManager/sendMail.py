from django.core.mail import send_mail
from django.utils.html import strip_tags

def render_parts(order):
    parts = ''
    if 'parts' in order:
        spl = order['parts'].split(';')
        parts+= '<h3>Состав торта<h3/>'
        for item in spl:
            parts += '<div class ="part">{}<div/>'.format(item)
    return parts

def render_details(details):
    render = ''
    spl = details.split(';')
    render += '<h3>Доп. сведения<h3/>'
    for item in spl:
        render += '<div class ="part">{}<div/>'.format(item)
    return render

def send(order, date):

    client     = order['name']
    contact    = order['contact']
    order_type = order['type']
    date       = date.strftime("%d %B")
    parts      = render_parts(order) 

    comment    = '' 
    if 'comment' in order:
        comment = '<h3>Комментарий<h3/><p>{}<p/>'.format(order['comment'])

    details = render_details(order['details']) 
    
    from_email = 'david99111@mail.ru'
    to = [
        'smartguy3756@gmail.com',
    ]
    subject = 'Заказ на {}'.format(date)

    html_massage = '''
    <div class="mail">
        <h1>Заказ на {}</h1>
        <div class="sect">
            <p>Имя заказчика: {}</p>
            <p>Контакт: {}</p>
        </div>
        <hr>
        <div class="sect">
            <h2>Тип продукции: {}</h2>
        </div>
        <div class="sect cakeParts">
            {}
        </div>
        <div class="sect details">
            {}
        </div>
        <div class="sect comment">
            {}
        </div>
    </div>
    '''.format(
        date,
        client,
        contact,
        order_type,
        parts,
        details,
        comment
    )

    send_mail(
        subject,
        strip_tags(html_massage),
        from_email,
        to,
        html_message = html_massage
    )

    return True