k = []
i = 1;
x = 1;
while True:
	if (13*x) % 60 == 1:
		k.append(x)
		break
	else:
		print(x,"is not")
	x+=1
print(k)

