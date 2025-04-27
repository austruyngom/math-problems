def calculate_area(shape, dimensions):
    if shape == "rectangle":
        length = dimensions[0]
        width = dimensions[1]
        area = length * width
    elif shape == "circle":
        radius = dimensions[0] / 2
        area = math.pi * (radius ** 2)
    return area

# Example usage:
shapes = ["rectangle", "square", "circle"]
dimensions = [5, 3, 4]
areas = []
for shape in shapes:
    areas.append(calculate_area(shape, dimensions))
print(areas)
