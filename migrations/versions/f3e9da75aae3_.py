"""empty message

Revision ID: f3e9da75aae3
Revises: 
Create Date: 2023-11-29 23:57:15.559688

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f3e9da75aae3'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('countries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=180), nullable=False),
    sa.Column('salt', sa.String(length=80), nullable=False),
    sa.Column('countries_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['countries_id'], ['countries.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('img', sa.String(length=300), nullable=False),
    sa.Column('comment', sa.Text(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('categories_id', sa.Integer(), nullable=True),
    sa.Column('tags_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['categories_id'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['tags_id'], ['tags.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('posts')
    op.drop_table('user')
    op.drop_table('tags')
    op.drop_table('countries')
    op.drop_table('categories')
    # ### end Alembic commands ###