function cache( s, c )
{
	var a, g, i, x, p = { i: {}, ac: 0, c: 0 };
	
	for (x in s)
	{
		a = s[x];
		i = new Image();
		i.onload = function () {
			p.c++
		};
		i.src = a;
		p.i[a] = i;
		p.ac++
	}
	
	function l() {
		g = Math.round(p.c * 100 / p.ac);
		if ( g < 100 ) setTimeout(l, 200);
		else typeof c == 'function' ? c() : '';
	}
	
	l();
}
